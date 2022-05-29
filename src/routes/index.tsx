import Home from "@container/Home";
import Setting from "@container/setting";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default (): any => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/setting" element={<Setting />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};
