"use client";

import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader } from "../../ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../../ui/form";

interface SignInFormValues {
	email: string;
	password: string;
} // => setting tạm ( ở đây sẽ sử dụng zod để validate và export ra data type để bỏ vào hook useForm())

function SignInForm() {
	const form = useForm<SignInFormValues>({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	return (
		<div className="bg-[#EDF8F3] flex h-screen w-full items-center justify-center p-4">
			<Card className="flex w-full max-w-[530px] flex-col justify-between gap-[48px] p-8">
				<CardHeader>
					<h3 className="text-center font-medium text-2xl">
						<span className="text-[#4FBF8B] ">User</span> Login
					</h3>
				</CardHeader>
				<CardContent>
					<Form {...form}>
						<FormField
							// control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-base font-medium">
										Email
									</FormLabel>
									<FormControl>
										{/* <InputPassword
											placeholder={t(
												"auth.signIn.pleaseEnterPassword"
											)}
											{...field}
											disabled={isSubmitting}
										/> */}
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
}

export default SignInForm;
