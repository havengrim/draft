import React from 'react'; 
import { Image } from 'primereact/image';

const Images = ({ src }) => {
    const icon = (<i className="pi pi-search"></i>);

    return (
        <div className="card flex justify-content-center">
            <style>
                {`
                    .p-image-toolbar {
                        color: white !important;
                    }
                    .custom-rounded {
                        border-radius: 0.375rem;
                        overflow: hidden;
                    }
                `}
            </style>
            <Image src={src} indicatorIcon={icon} alt="Image" className='custom-rounded' preview/>
        </div>
    );
}

export default Images;