-- ===============================
-- Users (linked to Supabase Auth)
-- ===============================
create table users (
  id uuid primary key default gen_random_uuid(),
  auth_id uuid references auth.users(id) on delete cascade,
  email text unique not null,
  role text check (role in ('customer','admin')) default 'customer',
  created_at timestamp with time zone default now()
);

-- ===============================
-- Pets (per customer)
-- ===============================
create table pets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  name text not null,
  breed text,
  age int,
  weight numeric,
  health_concerns text,
  created_at timestamp with time zone default now()
);

-- ===============================
-- Products (meal plans, sessions)
-- ===============================
create table products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  price numeric not null,
  stock_quantity int default 0,
  is_digital boolean default true,
  created_at timestamp with time zone default now()
);

-- Insert sample products
insert into products (name, description, price, stock_quantity, is_digital)
values
('General Balanced Diet Plan', 'Digital diet sheet for healthy pets', 499, 100, true),
('Custom Pet Nutrition Plan', 'Personalized meal plan for pets', 799, 100, true),
('1:1 Coaching Session', 'Online consultation with Vinay', 899, 9999, true);

-- ===============================
-- Orders
-- ===============================
create table orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  product_id uuid references products(id),
  type text check (type in ('digital_plan','session')),
  payment_status text check (payment_status in ('pending','paid','failed','refunded')) default 'pending',
  payment_reference text, -- Razorpay payment_id
  tracking_id text,       -- Shiprocket tracking if physical product
  created_at timestamp with time zone default now()
);

-- ===============================
-- Sessions (for coaching bookings)
-- ===============================
create table sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
  order_id uuid references orders(id) on delete cascade,
  date_time timestamp with time zone,
  meeting_link text,
  status text check (status in ('scheduled','completed','cancelled')) default 'scheduled',
  created_at timestamp with time zone default now()
);

-- ===============================
-- Enable Row Level Security
-- ===============================
alter table users enable row level security;
alter table pets enable row level security;
alter table products enable row level security;
alter table orders enable row level security;
alter table sessions enable row level security;

-- ===============================
-- RLS Policies for Users
-- ===============================
create policy "Users can view their own profile" on users
  for select using (auth_id = auth.uid());

create policy "Users can update their own profile" on users
  for update using (auth_id = auth.uid());

create policy "Anyone can insert user profile on signup" on users
  for insert with check (auth_id = auth.uid());

create policy "Admins can view all users" on users
  for select using (
    exists (
      select 1 from users where auth_id = auth.uid() and role = 'admin'
    )
  );

-- ===============================
-- RLS Policies for Pets
-- ===============================
create policy "Users can view their own pets" on pets
  for select using (
    user_id in (select id from users where auth_id = auth.uid())
  );

create policy "Users can create pets for themselves" on pets
  for insert with check (
    user_id in (select id from users where auth_id = auth.uid())
  );

create policy "Users can update their own pets" on pets
  for update using (
    user_id in (select id from users where auth_id = auth.uid())
  );

create policy "Users can delete their own pets" on pets
  for delete using (
    user_id in (select id from users where auth_id = auth.uid())
  );

-- ===============================
-- RLS Policies for Products
-- ===============================
create policy "Anyone can view products" on products
  for select using (true);

create policy "Admins can manage products" on products
  for all using (
    exists (
      select 1 from users where auth_id = auth.uid() and role = 'admin'
    )
  );

-- ===============================
-- RLS Policies for Orders
-- ===============================
create policy "Users can view their own orders" on orders
  for select using (
    user_id in (select id from users where auth_id = auth.uid())
  );

create policy "Users can create their own orders" on orders
  for insert with check (
    user_id in (select id from users where auth_id = auth.uid())
  );

create policy "Users can update their own orders" on orders
  for update using (
    user_id in (select id from users where auth_id = auth.uid())
  );

create policy "Admins can view all orders" on orders
  for select using (
    exists (
      select 1 from users where auth_id = auth.uid() and role = 'admin'
    )
  );

-- ===============================
-- RLS Policies for Sessions
-- ===============================
create policy "Users can view their own sessions" on sessions
  for select using (
    user_id in (select id from users where auth_id = auth.uid())
  );

create policy "Users can create their own sessions" on sessions
  for insert with check (
    user_id in (select id from users where auth_id = auth.uid())
  );

create policy "Users can update their own sessions" on sessions
  for update using (
    user_id in (select id from users where auth_id = auth.uid())
  );

create policy "Admins can view all sessions" on sessions
  for select using (
    exists (
      select 1 from users where auth_id = auth.uid() and role = 'admin'
    )
  );

-- ===============================
-- Function to handle new user creation
-- ===============================
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (auth_id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

-- ===============================
-- Trigger for automatic user profile creation
-- ===============================
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();