# Hardcoded Admin Password Reset Secret

- Category: Secure / Authentication
- Difficulty: Easy

## Contains
- `server/routes/auth.ts`
- `server/services/passwordResetService.ts`
- `server/config/env.ts`
- `package.json`

## Prompt
The admin password reset flow uses a hardcoded secret. Move the secret into environment configuration and keep the reset behavior working.

## Likely Change Dirs
- `server/routes`
- `server/services`
- `server/config`
