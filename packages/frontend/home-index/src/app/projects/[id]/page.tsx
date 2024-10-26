export default async function Project(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  return <div>Project {params.id}</div>;
}
