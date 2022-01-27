import { Button, Box, Text, Input } from "theme-ui";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Login = () => {
	const router = useRouter();
	return (
		<Box sx={{ mb: 60, mt: 60 }}>
			<h1>Log in</h1>
			<Box sx={{ mb: 10 }}>
				<Text sx={{}}>Register Username</Text>
				<Input
					onChange={(e) => setRegesterEmail(e.target.value)}
					sx={{ textAlign: "right" }}
				></Input>
			</Box>
			<Box>
				<Text sx={{ mr: 60 }}>Register Password</Text>
				<Input
					type="password"
					sx={{ textAlign: "right" }}
					onChange={(e) => setRegisterPassword(e.target.value)}
				></Input>
				<Box sx={{ display: "flex", justifyContent: "center" }}>
					<Button
						// onClick={register}
						sx={{
							bg: "#1D7EF3",
							width: "50%",
							mt: 15,
						}}
					>
						Submit
					</Button>
				</Box>
				<Text>already have an account? Log in here</Text>
				<Button onClick={() => router.push("/")}>Sign up</Button>
			</Box>
		</Box>
	);
};

export default Login;
