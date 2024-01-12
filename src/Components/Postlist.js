import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export const Postlist = ({ product }) => {
  return (
    <div className="productContainer">
      <Card className="py-0 rounded border-none">
        <CardBody className="overflow-visible p-0 py-0">
          <Image
            alt="Card background"
            className="object-cover rounded-xl w-full"
            src="https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/704736b36f5145548e355e83f3790281_9366/kaptir-flow-shoes.jpg"
          />
        </CardBody>
        <CardHeader className="pb-1 pt-2 px-4 flex-col items-start">
          <h4 className="uppercase font-bold text-large">{product?.name}</h4>
          <small className="text-default-500">{product?.price}</small>
          <div className="CardActionIcon">
            <h4 className="font-bold text-large">Frontend Radio</h4>
            <div className="actionBtn">
              <div className="wishlistbtnCard">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 01.176-.17C12.72-3.042 23.333 4.867 8 15z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="cartbtnCard">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
