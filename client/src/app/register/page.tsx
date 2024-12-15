import { useState } from "react";
import { Button } from "../../components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";

export default function RegisterPage() {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		department: "",
		skill: "",
		background: "",
		availableDays: [],
		availableTimes: [],
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSelectChange = (name: string) => (value: string) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically send the form data to your backend
		console.log(formData);
		alert("Registration submitted successfully!");
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-blue-50 to-teal-50 py-12">
			<Card className="max-w-2xl mx-auto">
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-blue-800">
						Register for Programming Club
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
										name="firstName"
										value={formData.firstName}
										onChange={handleInputChange}
										required
									/>
								</div>
								<div>
									<Label htmlFor="lastName">Last Name</Label>
									<Input
										id="lastName"
										name="lastName"
										value={formData.lastName}
										onChange={handleInputChange}
										required
									/>
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
								</div>
								<Button
									type="button"
									onClick={() => setStep(2)}>
									Next
								</Button>
							</div>
						)}

						{step === 2 && (
							<div className="space-y-4">
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
											<SelectItem value="javascript">
												JavaScript
											</SelectItem>
										</SelectContent>
									</Select>
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
								</div>
								<Button
									type="button"
									onClick={() => setStep(1)}>
									Previous
								</Button>
								<Button
									type="button"
									onClick={() => setStep(3)}
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
									</RadioGroup>
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
								</div>
								<Button
									type="button"
									onClick={() => setStep(2)}>
									Previous
								</Button>
								<Button type="submit" className="ml-2">
									Submit
								</Button>
							</div>
						)}
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
