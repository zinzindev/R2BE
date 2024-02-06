export async function GET() {
	console.log('Hello World');
	return Response.json({ hello: 'world' });
}
