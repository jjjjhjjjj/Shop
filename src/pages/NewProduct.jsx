import { useRef, useState } from "react";
import { uploadImg } from "../api/uploadImg";
import { addNewProduct } from "../api/firebase";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useProducts from "../hooks/useProducts";

export default function NewProduct() {
  const [product, setProduct] = useState(initProduct);
  const [file, setFile] = useState();
  const formRef = useRef();
  const fileRef = useRef();
  const { addProduct } = useProducts();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleUploadImg = () => {
    const file = fileRef.current.files[0];
    setFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    uploadImg(file).then((img) => {
      addProduct.mutate(
        { ...product, date: Date.now(), img },
        {
          onSuccess: () => {
            alert("상품이 업로드 되었습니다.");
            resetForm();
          },
        }
      );
    });
  };

  const resetForm = () => {
    formRef.current.reset();
    setFile();
    setProduct(initProduct);
  };

  return (
    <>
      {file && <img src={URL.createObjectURL(file)} alt="Upload Img" />}
      <form ref={formRef}>
        <input
          type="file"
          name="img"
          ref={fileRef}
          onChange={handleUploadImg}
        />
        {Object.keys(inputs).map((key) => (
          <input
            type={key === "price" ? "number" : "text"}
            key={key}
            name={key}
            placeholder={inputs[key]}
            value={product[key]}
            onChange={handleChange}
          />
        ))}
        <button type="submit" onClick={handleSubmit}>
          상품 등록하기
        </button>
      </form>
    </>
  );
}

const initProduct = {
  id: crypto.randomUUID(),
  name: "",
  price: "",
  category: "",
  desc: "",
  options: "",
};

const inputs = {
  name: "제품명",
  price: "가격",
  category: "카테고리",
  desc: "제품 설명",
  options: "옵션들(콤마(,)로 구분)",
};
