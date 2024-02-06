export async function GET(request, { params }) {
	// display the params
	console.log(params.slug);
	return Response.json({ message: 'Hello form the API', params: params.slug });
}
