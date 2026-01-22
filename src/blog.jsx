import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const Header = ()  => <div>HEADER</div>
const Footer = () => <div>FOOTER</div>
const Content = styled.div`
	text-align: center;
	padding: 80px;
`;

export const Blog = () => {
	return (
		<>
			<Header />
				<Content>
					<h1>Page Content</h1>
					<Routes>
						<Route path="/" element={<div>Home</div>} />
						<Route path="/register" element={<div>Register</div>} />
						<Route path="/login" element={<div>Login</div>} />
						<Route path="/users" element={<div>Users</div>} />
						<Route path="/post/:post_id" element={<div>Post</div>} />
						<Route path="/post" element={<div>New Post</div>} />
						<Route path="*" element={<div>Error 404</div>} />
					</Routes>
				</Content>
				<Footer />
			</>
		);
	};
