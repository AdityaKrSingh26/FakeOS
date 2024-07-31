const data = [
    {
        "description": "This is a sample product description.",
        "favourited": false,
        "id": "vNjeB5bY8DjcfoNmiJVb",
        "imageUrl": "https://www.boat-lifestyle.com/cdn/shop/products/eb8e0fbd-c412-48b3-9c91-5b49ddf35800_288x.png?v=1673002681",
        "name": "Sample Product 1",
        "price": 20,
        "quantity": 6,
        "variants": [
            {
                "name": "Variant 1",
                "price": 20,
                "stock": 10
            },
            {
                "name": "Variant 2",
                "price": 30,
                "stock": 5
            }
        ]
    },
    {
        "description": "Another sample product with different attributes.",
        "favourited": true,
        "id": "wXzR8dT9LqPjfNnKwVJh",
        "imageUrl": "https://www.boat-lifestyle.com/cdn/shop/products/xyz123_288x.png?v=1673002682",
        "name": "Sample Product 2",
        "price": 25,
        "quantity": 8,
        "variants": [
            {
                "name": "Variant A",
                "price": 25,
                "stock": 12
            },
            {
                "name": "Variant B",
                "price": 35,
                "stock": 7
            }
        ]
    },
    {
        "description": "A stylish and trendy product for all seasons.",
        "favourited": false,
        "id": "xYzZ3bW8HkNjsfoWkTuv",
        "imageUrl": "https://www.boat-lifestyle.com/cdn/shop/products/abc456_288x.png?v=1673002683",
        "name": "Sample Product 3",
        "price": 30,
        "quantity": 10,
        "variants": [
            {
                "name": "Variant 1",
                "price": 30,
                "stock": 15
            },
            {
                "name": "Variant 2",
                "price": 40,
                "stock": 8
            }
        ]
    },
    {
        "description": "High-quality and durable product for daily use.",
        "favourited": true,
        "id": "rTnG4pL8MtQjrdoPzVIl",
        "imageUrl": "https://www.boat-lifestyle.com/cdn/shop/products/def789_288x.png?v=1673002684",
        "name": "Sample Product 4",
        "price": 18,
        "quantity": 12,
        "variants": [
            {
                "name": "Variant X",
                "price": 18,
                "stock": 20
            },
            {
                "name": "Variant Y",
                "price": 28,
                "stock": 6
            }
        ]
    },
    {
        "description": "Perfect for any occasion, stylish and elegant.",
        "favourited": false,
        "id": "lOqR1bZ8NpKufqMnWJxk",
        "imageUrl": "https://www.boat-lifestyle.com/cdn/shop/products/ghi012_288x.png?v=1673002685",
        "name": "Sample Product 5",
        "price": 22,
        "quantity": 15,
        "variants": [
            {
                "name": "Variant 1",
                "price": 22,
                "stock": 18
            },
            {
                "name": "Variant 2",
                "price": 32,
                "stock": 9
            }
        ]
    },
    {
        "description": "Modern and sleek design with excellent features.",
        "favourited": true,
        "id": "mNoT5vP8LkArezCnVzLu",
        "imageUrl": "https://www.boat-lifestyle.com/cdn/shop/products/jkl345_288x.png?v=1673002686",
        "name": "Sample Product 6",
        "price": 28,
        "quantity": 9,
        "variants": [
            {
                "name": "Variant 1",
                "price": 28,
                "stock": 12
            },
            {
                "name": "Variant 2",
                "price": 38,
                "stock": 5
            }
        ]
    },
    {
        "description": "Classic and timeless design for all age groups.",
        "favourited": false,
        "id": "pQrS6xB8OaLdfuNoWkJm",
        "imageUrl": "https://www.boat-lifestyle.com/cdn/shop/products/mno678_288x.png?v=1673002687",
        "name": "Sample Product 7",
        "price": 24,
        "quantity": 11,
        "variants": [
            {
                "name": "Variant 1",
                "price": 24,
                "stock": 14
            },
            {
                "name": "Variant 2",
                "price": 34,
                "stock": 7
            }
        ]
    },
    {
        "description": "Elegant and sophisticated for formal events.",
        "favourited": true,
        "id": "aBcD7fK8LpMrdoQyVJwK",
        "imageUrl": "https://www.boat-lifestyle.com/cdn/shop/products/pqr901_288x.png?v=1673002688",
        "name": "Sample Product 8",
        "price": 32,
        "quantity": 7,
        "variants": [
            {
                "name": "Variant 1",
                "price": 32,
                "stock": 9
            },
            {
                "name": "Variant 2",
                "price": 42,
                "stock": 6
            }
        ]
    },
    {
        "description": "Trendy and fashionable, perfect for any occasion.",
        "favourited": false,
        "id": "bCdE8gL9NpJsqPzKwTuV",
        "imageUrl": "https://www.boat-lifestyle.com/cdn/shop/products/stu234_288x.png?v=1673002689",
        "name": "Sample Product 9",
        "price": 27,
        "quantity": 13,
        "variants": [
            {
                "name": "Variant 1",
                "price": 27,
                "stock": 15
            },
            {
                "name": "Variant 2",
                "price": 37,
                "stock": 8
            }
        ]
    },
    {
        "description": "Comfortable and casual for everyday wear.",
        "favourited": true,
        "id": "cDeF9hM0LoTqsRzLwUjK",
        "imageUrl": "https://www.boat-lifestyle.com/cdn/shop/products/vwx567_288x.png?v=1673002690",
        "name": "Sample Product 10",
        "price": 19,
        "quantity": 14,
        "variants": [
            {
                "name": "Variant 1",
                "price": 19,
                "stock": 20
            },
            {
                "name": "Variant 2",
                "price": 29,
                "stock": 10
            }
        ]
    },
    {
        "description": "Sophisticated and classy, ideal for special events.",
        "favourited": false,
        "id": "dEfG0iN1MpJrtSzQxVjK",
        "imageUrl": "https://www.boat-lifestyle.com/cdn/shop/products/xyz890_288x.png?v=1673002691",
        "name": "Sample Product 11",
        "price": 34,
        "quantity": 5,
        "variants": [
            {
                "name": "Variant 1",
                "price": 34,
                "stock": 8
            },
            {
                "name": "Variant 2",
                "price": 44,
                "stock": 4
            }
        ]
    },
    {
        "description": "Durable and reliable, perfect for heavy use.",
        "favourited": true,
        "id": "eFgH1jO2LrKptTyUwVnL",
        "imageUrl": "https://www.boat-lifestyle.com/cdn/shop/products/xyz123_288x.png?v=1673002692",
        "name": "Sample Product 12",
        "price": 22,
        "quantity": 10,
        "variants": [
            {
                "name": "Variant 1",
                "price": 22,
                "stock": 15
            },
            {
                "name": "Variant 2",
                "price": 32,
                "stock": 6
            }
        ]
    },
    {
        "description": "Elegant and refined, suitable for any occasion.",
        "favourited": false,
        "id": "fGhI2kP3MrLuqUzVxWmL",
        "imageUrl": "https://www.boat-lifestyle.com/cdn/shop/products/abc789_288x.png?v=1673002693",
        "name": "Sample Product 13",
        "price": 26,
        "quantity": 8,
        "variants": [
            {
                "name": "Variant 1",
                "price": 26,
                "stock": 12
            },
            {
                "name": "Variant 2",
                "price": 36,
                "stock": 5
            }
        ]
    },
    {
        "description": "Modern and chic, ideal for trendy individuals.",
        "favourited": true,
        "id": "gHiJ3lQ4NoRuvVaWxYnM",
        "imageUrl": "https://www.boat-lifestyle.com/cdn/shop/products/stu678_288x.png?v=1673002694",
        "name": "Sample Product 14",
        "price": 29,
        "quantity": 12,
        "variants": [
            {
                "name": "Variant 1",
                "price": 29,
                "stock": 18
            },
            {
                "name": "Variant 2",
                "price": 39,
                "stock": 7
            }
        ]
    },
    {
        "description": "Functional and stylish, perfect for daily use.",
        "favourited": false,
        "id": "hIjK4mR5LoTqwUxVyZpL",
        "imageUrl": "https://www.boat-lifestyle.com/cdn/shop/products/uvw012_288x.png?v=1673002695",
        "name": "Sample Product 15",
        "price": 23,
        "quantity": 11,
        "variants": [
            {
                "name": "Variant 1",
                "price": 23,
                "stock": 15
            },
            {
                "name": "Variant 2",
                "price": 33,
                "stock": 6
            }
        ]
    },
    {
        "description": "High-quality and versatile for various uses.",
        "favourited": true,
        "id": "iJkL5nS6MpRvyWzUxQoM",
        "imageUrl": "https://www.boat-lifestyle.com/cdn/shop/products/xyz345_288x.png?v=1673002696",
        "name": "Sample Product 16",
        "price": 31,
        "quantity": 9,
        "variants": [
            {
                "name": "Variant 1",
                "price": 31,
                "stock": 13
            },
            {
                "name": "Variant 2",
                "price": 41,
                "stock": 8
            }
        ]
    },
    {
        "description": "Elegant and sophisticated for formal settings.",
        "favourited": false,
        "id": "jKlM6oT7NoRpwVxYzZpL",
        "imageUrl": "https://www.boat-lifestyle.com/cdn/shop/products/abc456_288x.png?v=1673002697",
        "name": "Sample Product 17",
        "price": 35,
        "quantity": 6,
        "variants": [
            {
                "name": "Variant 1",
                "price": 35,
                "stock": 10
            },
            {
                "name": "Variant 2",
                "price": 45,
                "stock": 5
            }
        ]
    },
    {
        "description": "Stylish and fashionable, perfect for modern trends.",
        "favourited": true,
        "id": "kLmN7pU8OrSvwYzAqXrL",
        "imageUrl": "https://www.boat-lifestyle.com/cdn/shop/products/def012_288x.png?v=1673002698",
        "name": "Sample Product 18",
        "price": 26,
        "quantity": 7,
        "variants": [
            {
                "name": "Variant 1",
                "price": 26,
                "stock": 11
            },
            {
                "name": "Variant 2",
                "price": 36,
                "stock": 5
            }
        ]
    },
    {
        "description": "Comfortable and durable, ideal for everyday use.",
        "favourited": false,
        "id": "lMnO8qV9NpRuxYzBwZjK",
        "imageUrl": "https://www.boat-lifestyle.com/cdn/shop/products/ghi345_288x.png?v=1673002699",
        "name": "Sample Product 19",
        "price": 20,
        "quantity": 15,
        "variants": [
            {
                "name": "Variant 1",
                "price": 20,
                "stock": 20
            },
            {
                "name": "Variant 2",
                "price": 30,
                "stock": 10
            }
        ]
    },
    {
        "description": "Classic and reliable, a must-have in your collection.",
        "favourited": true,
        "id": "mNoP9rW0OqSuxYzCwZkL",
        "imageUrl": "https://www.boat-lifestyle.com/cdn/shop/products/jkl678_288x.png?v=1673002700",
        "name": "Sample Product 20",
        "price": 28,
        "quantity": 8,
        "variants": [
            {
                "name": "Variant 1",
                "price": 28,
                "stock": 12
            },
            {
                "name": "Variant 2",
                "price": 38,
                "stock": 6
            }
        ]
    }
]

export default data;