import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Modal } from "./Modal";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		first_name: "",
		last_name: "",
		phone_number: "",
		department: "",
		email: "",
		skill: "",
		background: "",
		has_computer: "",
		availableDays: "",
		availableTimes: "",
	});
	const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
	const [showSuccessModal, setShowSuccessModal] = useState(false);
	const [showAlreadyRegisteredModal, setShowAlreadyRegisteredModal] =
		useState(false);
	const [showErrorModal, setShowErrorModal] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	// const server_url = "http://localhost:5000";
	const server_url = "https://programming-club.onrender.com";

	// Validation function
	const validateForm = () => {
		const errors: { [key: string]: string } = {};
		if (!formData.first_name.trim())
			errors.first_name = "First name is required";
		if (!formData.last_name.trim())
			errors.last_name = "Last name is required";
		if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
			errors.email = "A valid email is required";
		if (!formData.phone_number.trim())
			errors.phone_number = "Phone number is required";
		if (step >= 2 && !formData.department.trim())
			errors.department = "Department is required";
		if (step >= 2 && !formData.skill)
			errors.skill = "Please select a skill to learn";
		if (step >= 2 && !formData.background.trim())
			errors.background = "Background information is required";
		if (step === 3 && !formData.availableDays)
			errors.availableDays = "Please select your available days";
		if (step === 3 && !formData.availableTimes)
			errors.availableTimes = "Please select your available times";
		return errors;
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSelectChange = (name: string) => (value: string) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const errors = validateForm();
		if (Object.keys(errors).length > 0) {
			setFormErrors(errors);
			return;
		}
		setFormErrors({});
		setLoading(true);

		try {
			const response = await fetch(`${server_url}/join`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			const data = await response.json();
			if (response.status === 201) setShowSuccessModal(true);
			else if (response.status === 409)
				setShowAlreadyRegisteredModal(true);
			else throw new Error(data.message || "Unexpected error occurred");
		} catch (error) {
			console.error("Error:", error);
			setShowErrorModal(true);
		} finally {
			setLoading(false);
		}
	};

	function hasAnyValue(obj: object) {
		return Object.values(obj).some(
			(value) =>
				value !== null &&
				value !== undefined &&
				value !== false &&
				value !== ""
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-50 py-12">
			<Card className="max-w-2xl mx-auto">
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-blue-800">
						Register for AUO Programming Club
					</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit}>
						{step === 1 && (
							<div className="space-y-4">
								<div>
									<Label htmlFor="firstName">
										First Name
									</Label>
									<Input
										id="firstName"
										name="first_name"
										value={formData.first_name}
										onChange={handleInputChange}
										required
									/>
									{formErrors["first_name"] && (
										<p className="text-red-500 text-sm">
											{formErrors["first_name"]}
										</p>
									)}
								</div>
								<div>
									<Label htmlFor="lastName">Last Name</Label>
									<Input
										id="lastName"
										name="last_name"
										value={formData.last_name}
										onChange={handleInputChange}
										required
									/>
									{formErrors["last_name"] && (
										<p className="text-red-500 text-sm">
											{formErrors["last_name"]}
										</p>
									)}
								</div>
								<div>
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										required
									/>
									{formErrors["email"] && (
										<p className="text-red-500 text-sm">
											{formErrors["email"]}
										</p>
									)}
								</div>
								<div>
									<Label htmlFor="phone_number">
										Phone Number
									</Label>
									<Input
										id="phone_number"
										name="phone_number"
										value={formData.phone_number}
										onChange={handleInputChange}
										required
									/>
									{formErrors["email"] && (
										<p className="text-red-500 text-sm">
											{formErrors["phone_number"]}
										</p>
									)}
								</div>
								<Button
									type="button"
									onClick={() => {
										const errors: {
											[key: string]: string;
										} = {};

										if (!formData.first_name.trim())
											errors.first_name =
												"First name is required";
										if (!formData.last_name.trim())
											errors.last_name =
												"Last name is required";
										if (
											!formData.email.trim() ||
											!/\S+@\S+\.\S+/.test(formData.email)
										)
											errors.email =
												"A valid email is required";
										if (!formData.phone_number.trim())
											errors.phone_number =
												"Phone number is required";

										if (hasAnyValue(errors))
											setFormErrors(errors);
										else setStep(2);
									}}>
									Next
								</Button>
							</div>
						)}

						{step === 2 && (
							<div className="space-y-4">
								<div>
									<Label htmlFor="has_computer">
										Do you have a functional computer
										currently?
									</Label>
									<Select
										onValueChange={handleSelectChange(
											"has_computer"
										)}>
										<SelectTrigger>
											<SelectValue placeholder="Yes / No" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value={"True"}>
												Yes
											</SelectItem>
											<SelectItem value="False">
												No
											</SelectItem>
										</SelectContent>
									</Select>
									{formErrors["skill"] && (
										<p className="text-red-500 text-sm">
											{formErrors["skill"]}
										</p>
									)}
								</div>
								<div>
									<Label htmlFor="department">
										Department
									</Label>
									<Input
										id="department"
										name="department"
										value={formData.department}
										onChange={handleInputChange}
										required
									/>
									{formErrors["department"] && (
										<p className="text-red-500 text-sm">
											{formErrors["department"]}
										</p>
									)}
								</div>
								<div>
									<Label htmlFor="skill">
										Skill you want to learn
									</Label>
									<Select
										onValueChange={handleSelectChange(
											"skill"
										)}>
										<SelectTrigger>
											<SelectValue placeholder="Select a skill" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="ui-ux">
												UI/UX
											</SelectItem>
											<SelectItem value="graphics-design">
												Graphics Design
											</SelectItem>
											<SelectItem value="python">
												Python
											</SelectItem>
											<SelectItem value="web_development">
												Web Development
											</SelectItem>
											<SelectItem value="content_creation">
												Content Creation
											</SelectItem>
										</SelectContent>
									</Select>
									{formErrors["skill"] && (
										<p className="text-red-500 text-sm">
											{formErrors["skill"]}
										</p>
									)}
								</div>
								<div>
									<Label htmlFor="background">
										Your background in the selected skill
									</Label>
									<Textarea
										id="background"
										name="background"
										value={formData.background}
										onChange={handleInputChange}
										required
									/>
									{formErrors["background"] && (
										<p className="text-red-500 text-sm">
											{formErrors["background"]}
										</p>
									)}
								</div>
								<Button
									type="button"
									onClick={() => setStep(1)}>
									Previous
								</Button>
								<Button
									type="button"
									onClick={() => {
										const errors: {
											[key: string]: string;
										} = {};

										if (
											step >= 2 &&
											!formData.department.trim()
										)
											errors.department =
												"Department is required";
										if (step >= 2 && !formData.skill)
											errors.skill =
												"Please select a skill to learn";
										if (
											step >= 2 &&
											!formData.background.trim()
										)
											errors.background =
												"Background information is required";
										if (hasAnyValue(errors))
											setFormErrors(errors);
										else setStep(3);
									}}
									className="ml-2">
									Next
								</Button>
							</div>
						)}

						{step === 3 && (
							<div className="space-y-4">
								<div>
									<Label>Available Days</Label>
									<RadioGroup
										onValueChange={handleSelectChange(
											"availableDays"
										)}>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="monday-wednesday"
												id="monday-wednesday"
											/>
											<Label htmlFor="monday-wednesday">
												Monday & Wednesday
											</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="tuesday-thursday"
												id="tuesday-thursday"
											/>
											<Label htmlFor="tuesday-thursday">
												Tuesday & Thursday
											</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="saturday-sunday"
												id="saturday-sunday"
											/>
											<Label htmlFor="saturday-sunday">
												Saturday & Sunday
											</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="thursday-friday"
												id="thursday-friday"
											/>
											<Label htmlFor="thursday-friday">
												Thursday & Friday
											</Label>
										</div>
									</RadioGroup>
									{formErrors["availableDays"] && (
										<p className="text-red-500 text-sm">
											{formErrors["availableDays"]}
										</p>
									)}
								</div>
								<div>
									<Label>Available Times</Label>
									<RadioGroup
										onValueChange={handleSelectChange(
											"availableTimes"
										)}>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="morning"
												id="morning"
											/>
											<Label htmlFor="morning">
												Morning (9 AM - 12 PM)
											</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="afternoon"
												id="afternoon"
											/>
											<Label htmlFor="afternoon">
												Afternoon (2 PM - 5 PM)
											</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="evening"
												id="evening"
											/>
											<Label htmlFor="evening">
												Evening (6 PM - 9 PM)
											</Label>
										</div>
									</RadioGroup>
									{formErrors["availableTimes"] && (
										<p className="text-red-500 text-sm">
											{formErrors["availableTimes"]}
										</p>
									)}
								</div>
								<Button
									type="button"
									onClick={() => setStep(2)}>
									Previous
								</Button>
								<Button
									type="submit"
									disabled={loading}
									className="ml-2">
									Submit
								</Button>
							</div>
						)}
					</form>
				</CardContent>
			</Card>

			{/* Modals */}
			<Modal
				isOpen={showSuccessModal}
				onClose={() => {
					setShowSuccessModal(false);
					navigate("/success");
				}}
				title="Registration Successful">
				<p>Thank you for registering with the Programming Club!</p>
			</Modal>

			<Modal
				isOpen={showAlreadyRegisteredModal}
				onClose={() => setShowAlreadyRegisteredModal(false)}
				title="Already Registered">
				<p>You're already registered with the Programming Club.</p>
			</Modal>

			<Modal
				isOpen={showErrorModal}
				onClose={() => setShowErrorModal(false)}
				title="Registration Error">
				<p>
					An error occurred while processing your registration. Please
					try again later.
				</p>
			</Modal>
		</div>
	);
}
