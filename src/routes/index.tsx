import SystemDashboard from "../container/dashboard/system-dashboard";
import CourseDashboard from "../container/dashboard/coures-dashboard";
import CreateCourse from "../container/create-course";
import OpenCourse from "../container/open-course";
import TypeCourse from "../container/setting-course/type-course";
import Certificate from "../container/setting-course/certificate";
import Staff from "../container/staff-management/staff";
import Position from "../container/staff-management/position";
import Chat from "../container/chat";
import Banner from "../container/web-setting/banner";
import Library from "../container/web-setting/library";
// import Setting from "../container/management";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/main-layout";
export default (): any => {
	return (
		<Router>
			<MainLayout>
				<Routes>
					<Route path="/" element={<SystemDashboard />} />
					<Route path="/course-dashboard" element={<CourseDashboard />} />
					<Route path="/create-course" element={<CreateCourse />} />
					<Route path="/open-course" element={<OpenCourse />} />
					<Route path="/type-course" element={<TypeCourse />} />
					<Route path="/certificate" element={<Certificate />} />
					<Route path="/staff" element={<Staff />} />
					<Route path="/position" element={<Position />} />
					<Route path="/chat" element={<Chat />} />
					<Route path="/banner" element={<Banner />} />
					<Route path="/library" element={<Library />} />
				</Routes>
			</MainLayout>
		</Router>
	);
};
