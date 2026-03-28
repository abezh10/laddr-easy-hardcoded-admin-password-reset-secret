# Hardcoded Admin Password Reset Secret

- Category: Secure
- Topic: Authentication
- Difficulty: Easy

## Overview
This sample repository is set up for an easy secure exercise in the authentication track. The starter code is intentionally lightweight: it gives Sandpack something meaningful to render or inspect, but it still leaves the real evaluation work in place so a candidate has to tighten the implementation without removing the intended workflow.

## Exercise Summary
The admin password reset flow uses a hardcoded secret. Move the secret into environment configuration and keep the reset behavior working.

## Starter State
The current scaffold keeps the requested folder layout intact and includes small task-adjacent starter implementations. Frontend files render simple placeholder UI, while routes, services, hooks, utilities, and data files expose minimal sample data or placeholder behavior without solving the exercise for the learner.

## Repo Files
- `package.json`
- `server/config/env.ts`
- `server/routes/auth.ts`
- `server/services/passwordResetService.ts`

## Likely Change Areas
- `server/config`
- `server/routes`
- `server/services`

## Sandbox Notes
These files are intentionally small and preview-friendly. They should render a lightweight surface where that makes sense, while still leaving the real build, debug, refactor, security, or migration work undone.
