-- name: CreateProduct :one
INSERT INTO
  "products" (
    "pid",
    "name",
    "description",
    "unitName",
    "priceSol",
    "priceUsd"
  )
VALUES
  ($1, $2, $3, $4, $5, $6) RETURNING *;

-- name: GetProduct :one
SELECT
  *
FROM
  "products"
WHERE
  name = $1
LIMIT
  1;

-- name: ListProducts :many
SELECT
  *
FROM
 products 
ORDER BY
  id
LIMIT
  $1 OFFSET $2;

-- -- name: DeleteCustomer :exec
-- DELETE FROM
--   customer
-- WHERE
--   username = $ 1;
-- 
-- -- name: UpdateInfoCustomer :one
-- UPDATE
--   customer
-- SET
--   sex = $ 2,
--   dob = $ 3,
--   phone = $ 4,
--   email = $ 5
-- WHERE
--   username = $ 1 RETURNING *;
-- 
-- -- name: UpdatePasswordCustomer :one
-- UPDATE
--   customer
-- SET
--   hashed_password = $ 2,
--   password_changed_at = $ 3
-- WHERE
--   username = $ 1 RETURNING *;
