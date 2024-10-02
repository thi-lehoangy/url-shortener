# URL Shortener

## API Design 
| Month    | Resource            | Request BodyBody | Response |
| -------- | -------             | ---------------- | -------- |
| GET      | `/`    | None             | All URL Mappings <br> Status Code 200 |
| GET      | `/:redirect_code`    | None             | Original URL <br> Status Code 301 |
| POST     | `/`        | `{"long_url": long_url, "short_url": short_url}` | Status Code 200 |

## Database Design 
url_mapping 

| id (PRIMARY KEY) | long_url | redirect_code | create_at |
| ---------------- | -------- | ------------- | --------- |
| INTEGER | TEXT | TEXT | DATE | 

## Requirements 
- Take a long URL and a short URL and map them 
- If a short URL is given, redirect the user to the original URL