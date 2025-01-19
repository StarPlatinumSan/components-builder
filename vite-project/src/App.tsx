import SlidePlatinum from "./components/SlidePlatinum";
import InfiniteSlider from "./components/InfiniteSlider";
import "./App.css";

function App() {
	const sponsorLogos = [
		<div>Sponsor 1</div>,
		<div>Sponsor 2</div>,
		<div>Sponsor 3</div>,
		<div>Sponsor 4</div>,
		<div>Sponsor 5</div>,
		<div>Sponsor 6</div>,
		<div>Sponsor 7</div>,
		<div>Sponsor 8</div>,
		<div>Sponsor 9</div>,
		<div>Sponsor 10</div>,
		<div>Sponsor 11</div>,
		<div>Sponsor 12</div>,
	];

	return (
		<>
			<div className="container">
				<header>
					<SlidePlatinum title="Ceci est un slidedown" duration={0.3} trigger="click">
						<p className="content">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque ex velit nisi quaerat. Nulla consequatur inventore recusandae explicabo ducimus et modi? Adipisci, minus dicta assumenda nihil pariatur repellat quia odit.
						</p>
					</SlidePlatinum>
					<SlidePlatinum title="Ceci est un autre slidedown" duration={0.3} trigger="click">
						<p className="content">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque ex velit nisi quaerat. Nulla consequatur inventore recusandae explicabo ducimus et modi? Adipisci, minus dicta assumenda nihil pariatur repellat quia odit.
						</p>
					</SlidePlatinum>
					<SlidePlatinum title="Ceci est est le dernier" duration={0.3} trigger="click">
						<p className="content">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque ex velit nisi quaerat. Nulla consequatur inventore recusandae explicabo ducimus et modi? Adipisci, minus dicta assumenda nihil pariatur repellat quia odit.
						</p>
					</SlidePlatinum>
				</header>

				<div className="flex-center">
					<InfiniteSlider items={sponsorLogos} sliderWidth="100%" itemWidth="200px" itemHeight="60px" duration={15} />
				</div>
			</div>
		</>
	);
}

export default App;
