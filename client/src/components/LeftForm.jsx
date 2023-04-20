import React from "react";
import Counter from "./Counter";

const LeftForm = ({
  count,
  setCount,
  formData,
  setFormData,
  loading,
  setLoading,
  setIntros,
  setAllIntros,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGenerate = async (count) => {
    setLoading(true);
    setTimeout(() => {
      // replicating time wait for fetching data
      console.log("data loaded", count);
      const newIntros = [];
      for (var i = 0; i < count; i++) {
        if (i % 2 === 0)
          newIntros.push({
            intro:
              "Attention industry professionals! Are you tired of dealing with the headache of data flow diagrams (DFDs)? Well, fear not! In this how—to guide, we'll break down the convlexities of DFDs arid provide you with a step-by-step process to create them with ease. Whether you're a seasoned pro or a newbie to the world of DFDs, this guide will have you diagrams like a pro in no time. So, grab your coffee and let's dive into the world of DFDs!",
            saved: false,
          });
        else
          newIntros.push({
            intro:
              "Are you tired of the endless hours spent analyzing data for your industry? Look no further' In this how-to guide. well be     dscussing the power of DFDs and how they can transform the way you approach data analysis. Whether youre a seasoned professional or just starting out your industry, this gude is a must-read. So. grab a of coffee md lefs into the world of DFDs.",
            saved: false,
          });
      }
      setIntros(newIntros);
      setAllIntros((prev) => [...prev, ...newIntros]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div
      className="py-6 border-[1px] border-[#414141] flex flex-col gap- justify-between w-[45%] min-w-[240px] max-w-[340px]"
      style={{
        background:
          "linear-gradient(to bottom right, rgba(17, 17, 17, 0.5), #111111)",
      }}
    >
      <div className="px-6 border-b-[1px] flex flex-col gap-3 border-[#464646] pb-10">
        <label className="flex flex-col gap-1">
          <p className="font-medium">
            Blog Post Topic:<span className="text-red-600">*</span>
          </p>
          <input
            className="inner-input focus:outline-none focus:border-[#616161]"
            placeholder="Topic"
            name="topic"
            value={formData.topic}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label className="flex flex-col gap-1">
          <p className="font-medium">
            Target Audience:<span className="text-red-600">*</span>
          </p>
          <select
            className="inner-input focus:outline-none focus:border-[#616161] text-[#9ca3af]"
            placeholder="Select an item"
            name="audience"
            value={formData.audience}
            onChange={(e) => handleChange(e)}
          >
            <option>Select an item</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <p className="font-medium">
            Main Keyword:<span className="text-red-600">*</span>
          </p>
          <input
            className="inner-input focus:outline-none focus:border-[#616161]"
            placeholder="Keyword"
            name="keyword"
            value={formData.keyword}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label className="flex flex-col gap-1">
          <p className="font-medium">
            Tone:<span className="text-red-600">*</span>
          </p>
          <select
            className="inner-input focus:outline-none focus:border-[#616161] text-[#9ca3af]"
            placeholder="Select an item"
            name="tone"
            value={formData.tone}
            onChange={(e) => handleChange(e)}
          >
            <option>Select an item</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <p className="font-medium">
            Additional Keywords:<span className="text-red-600">*</span>
          </p>
          <input
            className="inner-input focus:outline-none focus:border-[#616161]"
            placeholder="Keywords"
            name="additionalKeywords"
            value={formData.additionalKeywords}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label className="flex flex-col gap-1">
          <p className="font-medium">
            Blog Type Post:<span className="text-red-600">*</span>
          </p>
          <select
            className="inner-input focus:outline-none focus:border-[#616161] text-[#9ca3af]"
            placeholder="Select an item"
            name="type"
            value={formData.type}
            onChange={(e) => handleChange(e)}
          >
            <option>Select an item</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </label>
      </div>
      <div className="pb-2 pt-8 px-6 flex flex-col gap-4">
        <div className="flex justify-between">
          <Counter count={count} setCount={setCount} />
          <p className="font-medium">Total Cost: Free</p>
        </div>
        <button
          className="px-5 py-2 rounded-md font-bold"
          style={{
            background: "linear-gradient(135deg, #76edc5, #d5fa9d)",
            opacity: loading && "50%",
          }}
          onClick={() => handleGenerate(count)}
          disabled={loading}
        >
          Generate Content
        </button>
      </div>
    </div>
  );
};

export default LeftForm;
