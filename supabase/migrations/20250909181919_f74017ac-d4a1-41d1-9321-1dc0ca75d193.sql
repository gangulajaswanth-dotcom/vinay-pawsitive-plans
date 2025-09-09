-- Fix the function search path security issue
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (auth_id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer set search_path = public;