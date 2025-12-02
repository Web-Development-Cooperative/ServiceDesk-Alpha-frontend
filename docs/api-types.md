# Naming Conventions and API Types

Документация описывает правила нейминга типов для работы с API и фронтендом в проекте на React + TypeScript.  
Включает как типы для URL/Body/Payload/Response, так и типы фронтенда (Model).

---

## Общие правила нейминга

| Тип            | Название                                                    | Использование                        |
| -------------- | ----------------------------------------------------------- | ------------------------------------ |
| URL Params     | `[Entity]RequestUrl` / `[Entity]Request[method]Url`         | Параметры, передаваемые в URL        |
| Request Body   | `[Entity]RequestBody` / `[Entity]Request[method]Body`       | Тело POST/PUT запроса                |
| Полный Payload | `[Entity]RequestPayload` / `[Entity]Request[method]Payload` | Объединение URL + Body + Params      |
| Response       | `[Entity]ResponseBody` / `[Entity]Response[method]Body`     | Объект, приходящий с сервера         |
| Frontend Model | `[Entity]Model`                                             | Объект в фронтенде, может отличаться |

---

### 1. Сокращения

1. Если тип `[Entity]Request[method]Url` используется в большинстве случаев, можно сократить его до `[Entity]RequestUrl`.  
   Аналогично для `[Entity]Request[method]Body`, `[Entity]Request[method]Payload`, `[Entity]Response[method]Body`.
2. Если `[Entity]Request[method]Url` содержит **только одно поле**, можно сократить его до типа этого единственного поля:
    ```ts
    type EmployeeCategoryRequestUrl = { categoryId: string };
    // можно сократить до
    type EmployeeCategoryRequestUrl = string;
    ```
    Но:
    - Такая оптимизация не работает для `[Entity]Request[method]Payload` (там всегда больше одного поля(url, body, params)).
    - `[Entity]Request[method]Body` сокращается только если бэк разрешает передавать значение без ключа.
    - `[Entity]Response[method]Body` и `[Entity]Model` не сокращаются.

### 2. Пример ответа сервера

-   `[Entity]`: `Employees`

```ts
type EmployeeResponseBody = {
  id: string;
  branchId: string;
  user: {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    patronymic: string;
    workplace: string;
  };
};

type EmployeesResponseBody = BaseResponseBody<EmployeeResponseBody>;

type BaseResponseBody<T> = {
  content: Array<T>;
  pageable: Pageable;
  totalPages: number;
  last: boolean;
  totalElements: number;
  size: number;
  number: number;
  sort: [];
  first: boolean;
  numberOfElements: number;
  empty: boolean;
};
```

-   Итоговый ответ от сервера всегда будет в типе `EmployeesResponseBody`, чтобы учитывать пагинацию и метаданные.

### 3. Пример модели фронтенда

```ts
type EmployeeModel = Omit<EmployeeResponseBody, 'user'> & {
  user: Omit<EmployeeResponseBody['user'], 'first_name' | 'last_name'> & {
    firstname: string;
    lastname: string;
  };
};

type EmployeesModel = Array<EmployeeModel>;
```

-   Модель EmployeeModel берётся из `EmployeeResponseBody`, но поля `first_name` и `last_name` преобразуются в `camelCase` для фронтенда.
