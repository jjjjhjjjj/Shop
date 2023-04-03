import { useRef, useState } from "react";
import { uploadImg } from "../api/uploadImg";
import useProducts from "../hooks/useProducts";
import Button from "../components/ui/Button";

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
    <section className="w-full text-center">
      <h2 className="text-2xl font-bold my-4">새로운 제품 등록</h2>
      {file && (
        <img
          className="w-96 mx-auto mb-2"
          src={URL.createObjectURL(file)}
          alt="Upload Img"
        />
      )}
      <form className="flex flex-col px-12" ref={formRef}>
        <input
          type="file"
          name="img"
          ref={fileRef}
          onChange={handleUploadImg}
          className="mb-3"
        />
        {Object.keys(inputs).map((key) => (
          <input
            className="h-14 border-solid border-2 mb-5"
            type={key === "price" ? "number" : "text"}
            key={key}
            name={key}
            placeholder={inputs[key]}
            value={product[key]}
            onChange={handleChange}
          />
        ))}

        <Button text="상품 등록하기" onClick={handleSubmit} />
      </form>
    </section>
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
