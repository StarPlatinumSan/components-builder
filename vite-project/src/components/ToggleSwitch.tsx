import React from "react";
import "../styles/toggleSwitch.scss";

interface ToggleSwitchProps {
	checked: boolean;
	onChange: (checked: boolean) => void;
	id?: string;
	className?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange, id = "toggleSwitch", className = "btnSwitchCustom" }) => {
	return (
		<div className={className}>
			<input type="checkbox" id={id} checked={checked} onChange={(e) => onChange(e.target.checked)} />
		</div>
	);
};

export default ToggleSwitch;
