import photo1 from './photo1.jpg';
const HomeSectionCard = () => {
    return (
        <>
        <div className="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg w-[18rem] mx-3 cursor-pointer item-center ">
            <div className="h-[13rem] w-[10rem">
                <img className="object-cover object-top w-full h-full" src={photo1} alt="photo1" />


            </div>
            <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">Nofilter</h3>
                <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cupiditate sint iste velit, esse nisi nemo placeat blanditiis voluptas, dignissimos, labore ad distinctio tenetur similique molestiae tempore dicta itaque laborum?</p>
            </div>
         </div>
        </>

    )
}

export default HomeSectionCard;