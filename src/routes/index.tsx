import Home from "../container/home";
import Setting from "../container/setting";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
export default (): any => {
	return (
		<MainLayout>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/setting" element={<Setting />} />
				</Routes>
			</BrowserRouter>
		</MainLayout>
	);
};
