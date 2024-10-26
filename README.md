## Overview

This digital marketplace facilitates seamless trading of gift cards, purchasing of beats, and provides a comprehensive Virtual Top-Up (VTU) platform for airtime, internet data, and utility payments.

## Directory Overview

The project employs unique patterns and deviates from conventional trends and standards. The architecture and design choices are specifically tailored to meet the project's unique requirements and objectives, which may differ from standard practices.

<p>
The project adopts a pragmatic architectural approach, primarily following a feature-based structure. Layer-based or classification folders, such as modules, hooks, and validators, are created only when the project's complexity demands it. This approach ensures the codebase remains organized and maintainable without imposing unnecessary structural rigidity.
</p>

- **`app/config.ts`**: Contains configurations specific to the project's functional application, distinct from technical and environment setup configurations.
- **`vendors`**: Stores reusable files that can be utilized within this project and other codebases. These files are not coupled to the project in terms of settings, tooling, and other dependencies.
- **`lib`**: Intended for project-specific modules and scripts to perform tasks, implement, and encapsulate integrations. This includes hooks, utility functions, and abstractions over services like APIs and email. In other projects, this might be split into `services` and `utils` directories.
- **`store`**: Manages global state logic, focusing on state management rather than storing modules for various actions.

