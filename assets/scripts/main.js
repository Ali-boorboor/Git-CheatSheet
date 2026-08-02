import gitCommands from "../../data/gitCommands.js";
import Toastify from "./toastify.js";

const mainElement = document.querySelector("#main");

gitCommands.forEach((section) => {
  mainElement.insertAdjacentHTML("beforeend", renderSection(section));
});

function renderSection(section) {
  return `
<section
  class="flex flex-col sm:flex-row gap-4 justify-between items-center scroll-m-40 p-4 bg-neutral-800 text-neutral-300 ring-1 ring-neutral-400 shadow-sm shadow-neutral-400/50"
  id='${section.label.replaceAll(" ", "-").toLowerCase()}'
>
  <h3
    class="flex-1 text-xl font-semibold capitalize text-neutral-100 text-center"
  >
    ${section.label}
  </h3>

  <div class="grid-box w-full flex-3">
  ${section.commands.map(renderCommand).join("")}
  </div>
</section>`;
}

function renderCommand(command) {
  return `
    <div
      class="bg-neutral-900 text-neutral-100 p-2.5 ring-1 ring-neutral-100/20 rounded-md grid grid-rows-[1fr_auto] overflow-x-auto relative"
    >
      <header class="flex gap-4 items-start justify-between mb-1.5">
        <h4>${command.title}</h4>

        <button
          class="copy-command-button sticky right-0 bg-neutral-500 text-neutral-100 border border-neutral-100/20 p-1 rounded-md cursor-pointer hover:bg-neutral-500/80 transition-colors ease-in-out duration-300"
          data-command="${command.command}"
          type="button"
          title="copy"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
            />
          </svg>
        </button>
      </header>

      <code
        class="bg-neutral-500 text-neutral-100 border border-neutral-100/20 py-1 px-2 rounded-md text-sm text-nowrap w-fit"
      >
        ${command.command}
      </code>
    </div>
    `;
}

window.addEventListener("click", (event) => {
  const button = event.target.closest(".copy-command-button");

  if (button) {
    try {
      navigator.clipboard.writeText(button.dataset.command);

      Toastify({
        text: "Command Copied Successfully 🥳",
        duration: 3000,
        position: "right",
        style: {
          background:
            "linear-gradient(to right, oklch(52.7% 0.154 150.069), oklch(50.8% 0.118 165.612)",

          boxShadow:
            "0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 20px -4px rgba(255, 255, 255, 0.1)",
        },
      }).showToast();
    } catch (_) {
      Toastify({
        text: "Error In Copying Command 🥲",
        position: "right",
        duration: 3000,
        style: {
          background:
            "linear-gradient(to right, oklch(50.5% 0.213 27.518), oklch(51.4% 0.222 16.935)",

          boxShadow:
            "0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 20px -4px rgba(255, 255, 255, 0.1)",
        },
      }).showToast();
    }
  }
});
