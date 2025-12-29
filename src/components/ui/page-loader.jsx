const PageLoader = () => (
     <div className="w-full h-0.5 bg-[#EBF5FF] dark:bg-gray-400 overflow-hidden">
          <div
               className="w-full h-full bg-[#7AB3FF] dark:bg-yellow-400"
               style={{ animation: "loading 2s linear infinite" }}
          />
          <style>
               {`
                    @keyframes loading {
                         0% { transform: translateX(-100%); }
                         50% { transform: translateX(-30%); }
                         100% { transform: translateX(100%); }
                    }
               `}
          </style>
     </div>
);

export default PageLoader;
