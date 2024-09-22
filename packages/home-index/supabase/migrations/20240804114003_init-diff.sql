CREATE TYPE public.Visibility AS enum(
    'Public',
    'Private'
);

CREATE TABLE public.projects(
    id integer NOT NULL DEFAULT nextval('Projects_id_seq'::regclass),
    name text NOT NULL,
    description text,
    createdAt timestamp with time zone NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text),
    updatedAt timestamp with time zone NOT NULL DEFAULT (now() AT TIME ZONE 'utc'::text),
    status bigint,
    url text,
    remark text,
    previewImgs text[],
    visibility Visibility DEFAULT 'Private' ::Visibility
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- 所有用户（包括anno)都可以查看
CREATE POLICY "Public can view projects" ON public.projects
    FOR SELECT
        USING (visibility = 'Public'::Visibility);

