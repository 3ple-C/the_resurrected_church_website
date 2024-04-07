
import Star from "./star";

const Input = (props) => {
    return (
        <div class="m space-y-4">
            <label for="name" class="block text-black text-sm leading-6 lg:text-xl lg:leading-5 md:text-lg md:leading-5 font-bold ">{props.label}<Star /></label>
            <input type={props.type} id="name" name="name" placeholder={props.placeholder} required
                class="w-full form-input border-[#666666] px-3 py-5 border rounded   focus:outline-none " />
        </div>
    );
};

const Textarea = (props) => {
    return (
        <div class="mb-6">
            <label for="message" class="block text-black text-sm leading-6 lg:text-xl lg:leading-5 md:text-lg md:leading-5 font-bold mb-2">{props.message}<Star /></label>
            <textarea id="message" name="message" rows="14" placeholder={props.placeholder} required
                class="w-full form-textarea border-[#666666] px-3 py-5 border rounded focus:outline-none mb-3 md:mb-3 "></textarea>
        </div>
    );
};

const Select = (props) => {
    return (
        <div class="mb-6">
            <label for="message" class="block text-black text-sm leading-6 lg:text-xl lg:leading-5 md:text-lg md:leading-5 font-bold mb-2">{props.message}<Star /></label>
            <select id="message" name="message" rows="14" placeholder="How can we help you?" required
                class="w-full form-select border-[#666666] px-3 py-5 border rounded focus:outline-none mb-3 md:mb-3 ">
                <option value="">Dept 1</option>
                <option value="">Dept 1</option>
                <option value="">Dept 1</option>
                <option value="">Dept 1</option>
                <option value="">Dept 1</option>
                <option value="">Dept 1</option>
                <option value="">Dept 1</option>
            </select>
        </div>
    );
};

export { Input, Textarea, Select };