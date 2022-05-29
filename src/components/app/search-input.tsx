import { Input, Space } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";

const searchInput: any = () => {
	return (
		<div className="search-input">
			<Input size="large" prefix={<SearchOutlined />} />
			<FilterOutlined />
		</div>
	);
};
export default searchInput;
