import HorizontalSlider from '../animations/HorizontalSlider'

const LearningBlock = ({
  title,
  img,
  description,
  direction = 'left',
}) => {
  if (direction === 'right') {
    return (
      <HorizontalSlider direction={direction} >
        <div className=" bg-green-700  text-gray-200 pb-10 w-full sm:px-3 px-0 sm:flex block sm:justify-start justify-center sm:text-left text-center sm:py-5 py-0">
          <h2 className="text-green P22-Mackinac-Pro text-2xl font-medium sm:py-5 py-0 pt-2 sm:hidden block">
            {title}
          </h2>
          <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-full w-full sm:pr-5 pr-0 sm:hidden flex justify-center content-center sm:pb-5 pb-0">
            <img
              alt="blockImg"
              className="object-contain justify-center content-center flex"
              src={img}
              style={{ height: '276px', width: '300px' }}
            />
          </div>
          <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-full w-full sm:pl-5 pl-0">
            <h2 className="text-green  font-P22-Mackinac-Pro text-2xl font-medium sm:block hidden">
              {title}
            </h2>
            <p className="text-gray font-sofiapro text-lg font-light sm:text-left text-center sm:w-full w-4/5 mx-auto">
              {description}
            </p>
          </div>
          <div className="md:w-6/12 w-full sm:flex hidden justify-center content-center">
            <img
              alt="blockImg"
              className="object-contain justify-center content-center flex"
              src={img}
              style={{ height: '276px', width: '300px' }}
            />
          </div>
        </div>
      </HorizontalSlider>
    );
  }
  return (
    <HorizontalSlider direction={direction} key={Math.floor(Math.random() * 50)}>
      <div className="bg-white text-green-900 text-xl border-gray-300 pb-10 w-full sm:px-3 px-0 sm:flex block sm:justify-start justify-center sm:text-left text-center sm:py-5 py-0">
        <h2 className="text-green font-medium font-P22-Mackinac-Pro text-2xl sm:hidden pt-2 block pb-2">
          {title}
        </h2>
        <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-full w-full sm:pr-5 pr-0 md:block sm:flex flex justify-center content-center">
          <img
            alt="blockImg"
            src={img}
            className="object-contain mx-auto"
            style={{ height: '276px', width: '276px' }}
          />
        </div>
        <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-full w-full">
          <h2 className="text-green font-P22-Mackinac-Pro text-2xl font-medium sm:py-5 py-0 sm:block hidden">
            {title}
          </h2>
          <p className="text-gray font-sofiapro text-lg font-light sm:text-left text-center sm:pt-0 pt-5 sm:w-full w-4/5 mx-auto">
            {description}
          </p>
        </div>
      </div>
    </HorizontalSlider>
  );
};

// const LearningBlock = ({title, direction, img, description}) => {
//   if (direction === 'right') {
//     return (
//       <HorizontalSlider direction={direction} key={Math.floor(Math.random() * 50)}>
//         <div className="bg-green-700  text-gray-200 pb-10 w-full sm:px-3 px-0 sm:flex block sm:justify-start justify-center sm:text-left text-center sm:py-5 py-0">
//           <h2 className="text-green P22-Mackinac-Pro text-2xl font-medium sm:py-5 py-0 sm:hidden block">
//             {title}
//           </h2>
//           <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-full w-full sm:pr-5 pr-0 sm:hidden flex justify-center content-center sm:pb-5 pb-0">
//             <img
//               alt="blockImg"
//               className="object-contain justify-center content-center flex"
//               src={img}
//               style={{ height: '276px', width: '300px' }}
//             />
//           </div>
//           <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-full w-full sm:pl-5 pl-0">
//             <h2 className="text-green  font-P22-Mackinac-Pro text-2xl font-medium sm:block hidden">
//               {title}
//             </h2>
//             <p className="text-gray font-sofiapro text-lg font-light sm:text-left text-center sm:w-full w-4/5 mx-auto">
//               {description}
//             </p>
//           </div>
//           <div className="md:w-6/12 w-full sm:flex hidden justify-center content-center">
//             <img
//               alt="blockImg"
//               className="object-contain justify-center content-center flex"
//               src={img}
//               style={{ height: '276px', width: '300px' }}
//             />
//           </div>
//         </div>
//       </HorizontalSlider>
//     );
//   } else {
//   return (
//     <HorizontalSlider direction={direction} key={Math.floor(Math.random() * 50)}>
//       <div className=" bg-gray-100 text-green-900 text-xl border border-gray-300 pb-10 w-full sm:px-3 px-0 sm:flex block sm:justify-start justify-center sm:text-left text-center sm:py-5 py-0">
//         <h2 className="text-green  font-P22-Mackinac-Pro text-2xl font-medium sm:hidden block pb-10">
//           {title}
//         </h2>
//         <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-full w-full sm:pr-5 pr-0 md:block sm:flex flex justify-center content-center">
//           <img
//             alt="blockImg"
//             src={img}
//             className="object-contain mx-auto"
//             style={{ height: '276px', width: '276px' }}
//           />
//         </div>
//         <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-full w-full">
//           <h2 className="text-green font-P22-Mackinac-Pro text-2xl font-medium sm:py-5 py-0 sm:block hidden">
//             {title}
//           </h2>
//           <p className="text-gray font-sofiapro text-lg font-light sm:text-left text-center sm:pt-0 pt-5 sm:w-full w-4/5 mx-auto">
//             {description}
//           </p>
//         </div>
//       </div>
//     </HorizontalSlider>
//   );
//   }
// }

export default LearningBlock;
