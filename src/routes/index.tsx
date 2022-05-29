import Home from "../container/home";
import Setting from "../container/setting";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/main-layout";
export default (): any => {
	return (
		<Router>
			<MainLayout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/setting" element={<Setting />} />
				</Routes>
			</MainLayout>
		</Router>
	);
};
