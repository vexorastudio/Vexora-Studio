REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;

CREATE OR REPLACE FUNCTION public.validate_order_request()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  IF length(NEW.name) = 0 OR length(NEW.name) > 100 THEN
    RAISE EXCEPTION 'invalid name';
  END IF;
  IF length(NEW.email) = 0 OR length(NEW.email) > 255 THEN
    RAISE EXCEPTION 'invalid email';
  END IF;
  IF NEW.telegram IS NOT NULL AND length(NEW.telegram) > 100 THEN
    RAISE EXCEPTION 'invalid telegram';
  END IF;
  IF NEW.message IS NOT NULL AND length(NEW.message) > 2000 THEN
    RAISE EXCEPTION 'message too long';
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER validate_order_request_trg
BEFORE INSERT ON public.order_requests
FOR EACH ROW EXECUTE FUNCTION public.validate_order_request();
