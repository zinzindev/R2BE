const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
	type User {
		name: String
		age: Int
		position: String
	}

	type Query {
		users: [User]
	}
	type Mutation {
		createUser(name: String, age: Int, position: String): User
	}
`;

let users = [
	{ name: 'Joane Perott', age: 17, position: 'Sales Associate' },
	{ name: 'Jammie Seawright', age: 95, position: 'Automation Specialist' },
	{ name: 'Pia Poupard', age: 67, position: 'General Manager' },
];

const resolvers = {
	Query: {
		users: () => users,
	},
	Mutation: {
		createUser(parent, args) {
			const newUser = args;
			users.push(newUser);
			return newUser;
		},
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`server ready at prot ${url}`);
});
