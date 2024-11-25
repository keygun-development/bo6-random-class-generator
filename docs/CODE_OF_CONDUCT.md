# Code of Conduct

This document outlines the standards and guidelines for branch naming and the purpose of different branches within the project. Adherence to these guidelines ensures smooth collaboration and consistent practices among the development team.

## Branch Naming Convention

Branches should be named using the following format:

### Example:

- **km/bo6-22**  
  If your name is "Kevin Morris" and the issue number is "22", your branch should be named `km/bo6-22`.

### Important Notes:
- **Firstname Initial**: The first letter of your first name (lowercase).
- **Lastname Initial**: The first letter of your last name (lowercase).
- **Middlename Initial** (Optional): If you have a middle name, include the first letter of your middle name.
- **Issue Number**: The issue number is the number that corresponds to the task or issue you are working on.

---

## Branch Purpose and Guidelines

### `main` Branch
- **Purpose**: The `main` branch always contains tested and working code.
- **Deployment**: It is connected to the production environment, which is available at [https://bo6-random-class-generator.netlify.app/](https://bo6-random-class-generator.netlify.app/).
- **Code Quality**: Only code that is fully tested and validated should be merged into the `main` branch.
- **Best Practice**: Code pushed to the `main` branch should always be production-ready.

### `development` Branch
- **Purpose**: The `development` branch is the staging area for the site [https://dev-bo6-random-class.netlify.app/](https://dev-bo6-random-class.netlify.app/).
- **Code Completion**: The `development` branch should consist of completed code that is ready for testing but not yet verified for production.
- **Bug Resolution**: Any bug fixes or feature adjustments should first be applied here. This is the branch where developers resolve issues before merging to `main`.
- **Testing**: Ensure all code in `development` is thoroughly tested to confirm it works as expected before it is considered for merging into `main`.

---

## Workflow Guidelines

1. **Branch Creation**: When starting a new task, create a new branch based on the `development` branch. Name your branch according to the naming convention above.

2. **Code Testing**: Ensure your code is fully tested in the `development` branch. If necessary, use the development site to verify your changes in a live environment.

3. **Pull Requests**: When your feature or bug fix is complete and tested, create a pull request to merge your branch into the `development` branch. Once resolved and verified, the code can then be merged into the `main` branch.

4. **Bug Fixes and Features**: All bug fixes and features must be completed in the `development` branch before being merged into `main`. Do not directly commit to the `main` branch.

By following these guidelines, we ensure that the project remains organized, code is tested properly, and deployments happen smoothly.