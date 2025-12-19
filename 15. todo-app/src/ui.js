export async function getQuote(url, element) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();
        element.textContent = `"${data.data.content}" — ${data.data.author}`;
    } catch (error) {
        element.textContent = "Stay positive. Keep moving forward 💪";
        console.error(error);
    }
}

export function clearInput(element) {
    element.value = "";
}

export function createCard(array, element) {
    element.innerHTML = "";

    array.forEach((obj) => {
        element.innerHTML += `
                            <div
                                class="bg-sidebarBg border border-borderColor px-3 py-4 rounded-xl max-w-xs md:max-w-sm flex flex-col gap-2 shadow-sm"
                            >
                                <div>
                                    <p
                                        class="font-bold text-sm text-primaryText"
                                    >
                                        Title:
                                    </p>
                                    <p class="px-2 text-sm text-secondaryText">
                                        ${obj.taskTitle}
                                    </p>
                                </div>
                                <div>
                                    <p
                                        class="font-bold text-sm text-primaryText"
                                    >
                                        Description:
                                    </p>
                                    <p class="px-2 text-sm text-secondaryText break-all">
                                        ${obj.taskDescription}
                                    </p>
                                </div>
                                <div>
                                    <p
                                        class="font-bold text-sm text-primaryText"
                                    >
                                        Priority:
                                    </p>
                                    <p class="px-2 text-sm text-secondaryText">
                                        ${obj.taskPriority}
                                    </p>
                                </div>
                                <div
                                    class="flex justify-center gap-2 mt-2 text-center"
                                >
                                    <button
                                        type="button"
                                        data-id=${obj.id}
                                        data-action="complete"
                                        class="btn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-activeItem"
                                    >
                                        Completed
                                    </button>
                                    <button
                                        type="button"
                                        data-id=${obj.id}
                                        data-action="delete"
                                        class="btn text-red-600 border-red-200 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-200"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>

    `;
    });
}

export function updateCounter(totalTasks, completedTasks, array) {
    totalTasks.innerText = array.filter((task) => !task.isCompleted).length;
    completedTasks.innerText = array.filter((task) => task.isCompleted).length;
}
