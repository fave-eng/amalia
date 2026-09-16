# Amalia English Space

Student: Amalia  
Level: A2.2  
Coursebook: Outcomes B1

## Content

The project is a clean copy of the learning-site architecture with no active homework transferred from another student.

Published homework files should be added to `data/lessons/` as `lesson-1.json`, `lesson-2.json`, and so on, then listed in `data/lessons/index.json`. Always set `notification.enabled` to `true` for every homework.

Vocabulary topics go in `data/vocabulary-data.js`.

Grammar topics go in `data/grammar-data.js`.

All student-facing text should stay in English at A2.2 level.

## Telegram

The requested Telegram topic is:

`https://t.me/c/3910367941/2`

For Telegram Bot API / Supabase setup this means:

`chat_id = -1003910367941`

`message_thread_id = 2`

Run `supabase/telegram-notifications-amalia.sql` in Supabase SQL Editor. It creates or updates the `telegram_recipients` row for `student_id = 'amalia'`.

Reports do not include the student's name. New-homework notifications and completed-homework reports both end with a motivational phrase.
