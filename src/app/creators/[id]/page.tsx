export default function Home({ params }: { params: { id: string } }) {
  return <div className="bg-green-500">Creator id {params.id}</div>;
}
