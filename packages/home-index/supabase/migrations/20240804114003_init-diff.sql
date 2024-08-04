create type "public"."Visibility" as enum ('Public', 'Private');

create sequence "public"."Projects_id_seq";

create table "public"."projects" (
    "id" integer not null default nextval('"Projects_id_seq"'::regclass),
    "name" text not null,
    "description" text,
    "createdAt" timestamp with time zone not null default (now() AT TIME ZONE 'utc'::text),
    "updatedAt" timestamp with time zone not null default (now() AT TIME ZONE 'utc'::text),
    "status" bigint,
    "url" text,
    "remark" text,
    "previewImgs" text[],
    "visibility" "Visibility" default 'Private'::"Visibility"
);


alter table "public"."projects" enable row level security;

alter sequence "public"."Projects_id_seq" owned by "public"."projects"."id";

CREATE UNIQUE INDEX "Projects_pkey" ON public.projects USING btree (id);

alter table "public"."projects" add constraint "Projects_pkey" PRIMARY KEY using index "Projects_pkey";

grant delete on table "public"."projects" to "anon";

grant insert on table "public"."projects" to "anon";

grant references on table "public"."projects" to "anon";

grant select on table "public"."projects" to "anon";

grant trigger on table "public"."projects" to "anon";

grant truncate on table "public"."projects" to "anon";

grant update on table "public"."projects" to "anon";

grant delete on table "public"."projects" to "authenticated";

grant insert on table "public"."projects" to "authenticated";

grant references on table "public"."projects" to "authenticated";

grant select on table "public"."projects" to "authenticated";

grant trigger on table "public"."projects" to "authenticated";

grant truncate on table "public"."projects" to "authenticated";

grant update on table "public"."projects" to "authenticated";

grant delete on table "public"."projects" to "service_role";

grant insert on table "public"."projects" to "service_role";

grant references on table "public"."projects" to "service_role";

grant select on table "public"."projects" to "service_role";

grant trigger on table "public"."projects" to "service_role";

grant truncate on table "public"."projects" to "service_role";

grant update on table "public"."projects" to "service_role";

create policy "Enable read access for all users"
on "public"."projects"
as permissive
for select
to public
using (true);



