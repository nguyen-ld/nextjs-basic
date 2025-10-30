import SignInForm from "@/src/components/modules/login/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sign In",
	description: "Sign In description",
};

function SignIn() {
	return <SignInForm />;
}

export default SignIn;
