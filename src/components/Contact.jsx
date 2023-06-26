import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { MdLocationCity } from "react-icons/md";
import { MdMarkunreadMailbox } from "react-icons/md";
import { BiWorld } from "react-icons/bi";

function Contact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset(); // Restablecer los inputs después de enviar los datos correctamente
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2 className="font-mont text-sm font-bold md:text-lg">
          Contact information
        </h2>
        <div className="py-4 md:py-7">
          {/* email */}

          <div className="flex flex-col">
            <label className="font-mont text-xs text-[#4F4F4F]">E-mail</label>
            <div className="flex items-center gap-2 outline outline-1 outline-[#828282] rounded-lg px-2 my-2 w-[349px] h-[40px] lg:w-[465px] text-[#828282]">
              <MdEmail />
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                className="text-sm font-mont w-[300px] md:w-[460px] outline-none text-black"
                {...register("email", {
                  required: "E-mail field is required",
                  pattern: {
                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,10})+$/,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 font-mont text-xs pb-3">
                {errors.email?.message}
              </p>
            )}
          </div>

          {/* phone */}

          <div className="flex flex-col">
            <label className="font-mont text-xs text-[#4F4F4F]">Phone</label>
            <div className="flex items-center gap-2 outline outline-1 outline-[#828282] rounded-lg px-2 my-2 w-[349px] h-[40px] lg:w-[465px] text-[#828282]">
              <MdLocalPhone />
              <input
                type="number"
                name="phone"
                placeholder="Enter your phone..."
                className="text-sm font-mont w-[300px] md:w-[460px] outline-none text-black"
                {...register("phone", {
                  required: "Phone field is required",
                  pattern: {
                    value: /^[0-9]{9}$/,
                    message: "Must have 9 digits",
                  },
                })}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 font-mont text-xs pb-3">
                {errors.phone?.message}
              </p>
            )}
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-mont text-sm font-bold md:text-lg">
          Shipping address
        </h2>
        <div className="py-4 md:py-7">
          {/* name */}

          <div className="flex flex-col">
            <label className="font-mont text-xs text-[#4F4F4F]">
              Full name
            </label>
            <div className="flex items-center gap-2 outline outline-1 outline-[#828282] rounded-lg px-2 my-2 w-[349px] h-[40px] lg:w-[465px] text-[#828282]">
              <MdAccountCircle />
              <input
                type="text"
                name="fullName"
                placeholder="Rodney Cotton"
                className="text-sm font-mont w-[300px] md:w-[460px] outline-none text-black"
                {...register("fullName", {
                  required: "Full name field is required",
                  minLength: {
                    value: 3,
                    message: "Full name must have at least 3 characters",
                  },
                  maxLength: {
                    value: 50,
                    message: "Full name can have a maximum of 50 characters",
                  },
                })}
              />
            </div>
            {errors.fullName && (
              <p className="text-red-500 font-mont text-xs pb-3">
                {errors.fullName?.message}
              </p>
            )}
          </div>

          {/* address */}

          <div className="flex flex-col">
            <label className="font-mont text-xs text-[#4F4F4F]">Address</label>
            <div className="flex items-center gap-2 outline outline-1 outline-[#828282] rounded-lg px-2 my-2 w-[349px] h-[40px] lg:w-[465px] text-[#828282]">
              <MdHome />
              <input
                type="text"
                name="address"
                placeholder="Your address.."
                className="text-sm font-mont w-[300px] md:w-[460px] outline-none text-black"
                {...register("address", {
                  required: "Address field is required",
                  minLength: {
                    value: 5,
                    message: "Address must have at least 5 characters",
                  },
                  maxLength: {
                    value: 55,
                    message: "Address can have a maximum of 55 characters",
                  },
                })}
              />
            </div>
            {errors.address && (
              <p className="text-red-500 font-mont text-xs pb-3">
                {errors.address?.message}
              </p>
            )}
          </div>

          {/* city */}

          <div className="flex flex-col">
            <label className="font-mont text-xs text-[#4F4F4F]">City</label>
            <div className="flex items-center gap-2 outline outline-1 outline-[#828282] rounded-lg px-2 my-2 w-[349px] h-[40px] lg:w-[465px] text-[#828282]">
              <MdLocationCity />
              <input
                type="text"
                name="acity"
                placeholder="Your city.."
                className="text-sm font-mont w-[300px] md:w-[460px] outline-none text-black"
                {...register("city", {
                  required: "City field is required",
                  minLength: {
                    value: 3,
                    message: "City must have at least 3 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "City can have a maximum of 20 characters",
                  },
                })}
              />
            </div>
            {errors.city && (
              <p className="text-red-500 font-mont text-xs pb-3">
                {errors.city?.message}
              </p>
            )}
          </div>

          {/* country */}

          <div className="flex gap-5">
            <div className="flex flex-col">
              <label className="font-mont text-xs text-[#4F4F4F]">
                Country
              </label>
              <div className="flex items-center gap-1 outline outline-1 outline-[#828282] rounded-lg px-2 my-2 w-[164px] h-[40px] lg:w-[217px] text-[#828282]">
                <BiWorld size={20} />
                <select
                  name="country"
                  className="text-sm font-mont w-[162px] md:w-[200px] outline-none"
                  {...register("country", {
                    required: "Please select your country",
                  })}
                >
                  <option value="" className="outline-none">
                    Your country..
                  </option>
                  <option value="Perú">Perú</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Colombia">Colombia</option>
                </select>
              </div>
              {errors.country && (
                <p className="text-red-500 font-mont text-xs pb-3 absolute pt-[68px]">
                  {errors.country?.message}
                </p>
              )}
            </div>

            {/* postal */}

            <div className="flex flex-col">
              <label className="font-mont text-xs text-[#4F4F4F]">
                Postal code
              </label>
              <div className="flex items-center gap-1 outline outline-1 outline-[#828282] rounded-lg px-2 my-2 w-[164px] h-[40px] lg:w-[217px] text-[#828282]">
                <MdMarkunreadMailbox />
                <input
                  type="number"
                  name="postal"
                  placeholder="Your postal code.."
                  className="text-sm font-mont w-[162px] outline-none truncate md:w-[200px] text-black"
                  {...register("postal", {
                    required: "Postal field is required",
                    pattern: {
                      value: /^[0-9]{9}$/,
                      message: "Must have 9 digits",
                    },
                  })}
                />
              </div>
              {errors.postal && (
                <p className="text-red-500 font-mont text-xs pb-3 absolute pt-[68px]">
                  {errors.postal?.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1 pt-4 md:py-5">
            <input type="checkbox" name="" id="" />
            <p className="font-mont text-xs text-[#4F4F4F] font-bold">
              Save this information for next time
            </p>
          </div>
          <div className="py-5 md:py-10 flex items-end justify-end md:place-content-end">
            <input
              type="submit"
              value="Continue"
              className="bg-[#F2994A] text-white rounded-md text-lg font-mont w-[167px] py-3 hover:bg-orange-500 transition hover:scale-105 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Contact;
