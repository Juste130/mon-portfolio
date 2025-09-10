const ToolIcon = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group">
      <div className="w-12 h-12 mb-3 flex items-center justify-center text-2xl">
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
        {name}
      </span>
    </div>
  );
};

export default ToolIcon;