const BASE_URL = "http://localhost:3333/tasks";

export async function fetchTasks() {
  const response = await fetch(BASE_URL);

  return await response.json();
}

export async function removeTask(id: number) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  return await response.json();
}

export async function updateToClosed(id: number) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify({
      status: "closed",
    }),
  });

  return await response.json();
}

export async function create(title: string) {
  const response = await fetch(BASE_URL, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      title,
      status: "open",
    }),
  });

  return await response.json();
}
