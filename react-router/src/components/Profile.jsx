import { useParams } from "react-router-dom";
import { DefaultProfile } from "./DefaultProfile.jsx";
import { Spinach } from "./Spinach.jsx";
import { Popeye } from "./Popeye.jsx";
import { Vinson } from "./Vinson.jsx";

const Profile = () => {
	const { name } = useParams();

	return (
		<div>
			<h1>Hello from the profile page!</h1>
			<p>What's up!</p>
			<hr />
			<h2>Profile visited:</h2>
			{name === "popeye" ? (
				<Popeye />
			) : name === "spinach" ? (
				<Spinach />
			) : name === "vinson" ? (
				<Vinson />
			) : name === "default" && (
				<DefaultProfile />
			)}
		</div>
	);
};

export { Profile }