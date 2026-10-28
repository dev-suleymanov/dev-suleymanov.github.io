/**
 * КОНФИГУРАЦИОННЫЙ ФАЙЛ ПОРТФОЛИО
 */
const CURRENT_YEAR = new Date().getFullYear();

window.PORTFOLIO_CONFIG = {
  // 1. ОБЩИЕ ДАННЫЕ И ССЫЛКИ
  general: {
    avatar: "foto.jpeg", // Рекомендуется убрать пробелы в имени файла на диске
    email: "dev.suleymanov@gmail.com",
    telegramUrl: "https://t.me/javarrior",
    githubUrl: "https://github.com/dev-suleymanov"
  },

  // 2. НАВИГАЦИОННАЯ ПАНЕЛЬ
  navbar: {
    ru: { about: "Обо мне", skills: "Стек", languages: "Языки", experience: "Опыт", contact: "Связь" },
    en: { about: "About", skills: "Stack", languages: "Languages", experience: "Experience", contact: "Contact" }
  },

  // 3. СЕКЦИЯ HERO (ГЛАВНЫЙ ЭКРАН)
  hero: {
    ru: {
      title: "Привет, я Рустам.<br>Java / Backend Developer.",
      lead: "Java-разработчик с опытом создания микросервисов на стеке Spring Boot, PostgreSQL, Redis и Kafka. Проектирую надежные REST API и оптимизирую работу баз данных так, чтобы сервисы стабильно держали высокие нагрузки.",
      avatarTitle: "Нажмите, чтобы увеличить",
      avatarAlt: "Рустам Сулейманов"
    },
    en: {
      title: "Hi, I'm Rustam.<br>Java / Backend Developer.",
      lead: "Java developer specializing in microservices with Spring Boot, PostgreSQL, Redis, and Kafka. I design robust REST APIs and optimize database performance to ensure systems handle high loads effortlessly.",
      avatarTitle: "Click to enlarge",
      avatarAlt: "Rustam Suleymanov"
    }
  },

  // 4. СЕКЦИЯ СТЕКА ТЕХНОЛОГИЙ
  skillsSection: {
    titles: {
      ru: "Стек технологий",
      en: "Tech Stack"
    },
    items: [
      "Java",
      "Spring Boot",
      "Spring MVC / Data / Security / Actuator",
      "Hibernate",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Apache Kafka",
      "REST API",
      "WebSockets",
      "Docker",
      "Kubernetes",
      "CI/CD (GitHub Actions, GitLab CI/CD)",
      "JUnit 5",
      "Mockito",
      "Prometheus / Grafana / Loki",
      "Maven",
      "Swagger (OpenAPI)",
      "Linux",
      "Git"
    ]
  },

  // 5. СЕКЦИЯ ВЛАДЕНИЯ ЯЗЫКАМИ
  languagesSection: {
    titles: {
      ru: "Знание языков",
      en: "Languages"
    },
    items: [
      {
        name: { ru: "Русский", en: "Russian" },
        level: { ru: "Родной", en: "Native" }
      },
      {
        name: { ru: "Английский", en: "English" },
        level: { ru: "B2 — Средне-продвинутый", en: "B2 — Upper-Intermediate" }
      }
    ]
  },

  // 6. СЕКЦИЯ ОПЫТА РАБОТЫ
  experienceSection: {
    titles: {
      ru: "Опыт разработки",
      en: "Work Experience"
    },
    stackPrefix: {
      ru: "Stack:",
      en: "Stack:"
    },
    list: [
      {
        company: {
          ru: "@ LekiTech Holding B.V.",
          en: "@ LekiTech Holding B.V."
        },
        role: {
          ru: "Java Developer",
          en: "Java Developer"
        },
        subinfo: {
          ru: "Разработка интерактивной образовательной платформы",
          en: "Development of an interactive educational platform"
        },
        period: {
          ru: "Апрель 2024 — Настоящее время",
          en: "April 2024 — Present"
        },
        bullets: {
          ru: [
            "Участвовал в декомпозиции монолита на микросервисы Spring Boot, что ускорило выпуск новых функций и снизило риски остановки всей системы.",
            "Оптимизировал сложные запросы в PostgreSQL, что сократило время загрузки страниц и повысило удержание пользователей в пиковые нагрузки.",
            "Внедрил кэширование в Redis, снизив нагрузку на базу данных и обеспечив стабильную работу платформы при росте числа пользователей.",
            "Перевёл отправку уведомлений в асинхронную обработку через Kafka, что ускорило пользовательские операции и изолировало внешний функционал.",
            "Повысил покрытие бизнес-логики тестами JUnit 5 / Mockito, сократив количество ошибок в продакшене и нагрузку на техподдержку.",
            "Настроил CI/CD конвейеры, сократив цикл выпуска обновлений и автоматизировав доставку кода.",
            "Деплоил сервисы в Kubernetes с использованием rolling update, обеспечив выпуск релизов без простоя системы (zero downtime).",
            "Внедрил централизованный мониторинг и логирование (Prometheus, Grafana, Loki), сократив время реакции на инциденты."
          ],
          en: [
            "Participated in monolithic decomposition into Spring Boot microservices, speeding up feature delivery and mitigating complete downtime risks.",
            "Optimized complex PostgreSQL queries, cutting page load times and increasing user retention during peak load periods.",
            "Implemented Redis caching, significantly reducing DB load and maintaining stability as the active user base expanded.",
            "Shifted notifications to asynchronous processing via Apache Kafka, accelerating user actions and decoupling external service dependencies.",
            "Increased business logic test coverage using JUnit 5 / Mockito, minimizing production incidents and support ticket volume.",
            "Configured CI/CD pipelines, shortening release cycles and automating deployments.",
            "Deployed services to Kubernetes using rolling updates, achieving seamless zero-downtime releases.",
            "Implemented centralized logging and observability (Prometheus, Grafana, Loki), drastically reducing incident response times."
          ]
        },
        stack: "Java, Spring Boot (MVC, Data, Security, Actuator), Hibernate, REST API, WebSockets, Kafka, PostgreSQL, Redis, Maven, JUnit 5, Mockito, Swagger, Docker, Kubernetes, Linux, Git, CI/CD, Prometheus, Grafana, Loki"
      },
      {
        company: {
          ru: "@ Коммерческий проект (NDA)",
          en: "@ Commercial Project (NDA)"
        },
        role: {
          ru: "Java Developer",
          en: "Java Developer"
        },
        subinfo: {
          ru: "Разработка серверных модулей для многопользовательских систем",
          en: "Development of server modules for multi-user high-load systems"
        },
        period: {
          ru: "Декабрь 2020 — Апрель 2024",
          en: "December 2020 — April 2024"
        },
        bullets: {
          ru: [
            "Спроектировал архитектуру хранения данных на MySQL для сети серверов, обеспечив стабильную работу под высокой нагрузкой.",
            "Реализовал кэширование сессионных данных в памяти процесса, уменьшив задержки (latency) для пользователей в пиковые часы.",
            "Настроил синхронизацию кэша с БД при сетевых сбоях, минимизировав критические потери состояния.",
            "Разработал библиотеку переиспользуемых модулей и разделил ответственность компонентов, сократив время внедрения новых фичей.",
            "Добавил централизованное логирование ключевых операций, ускорив обнаружение причин сбоев и локализацию ошибок.",
            "Автоматизировал регрессионное тестирование ключевых сценариев, снизив риски деградации стабильности после релизов.",
            "Поддерживал production-окружение, оперативно устранял инциденты и внедрял оптимизации без простоев."
          ],
          en: [
            "Architected MySQL data storage for a multi-server network, ensuring robust performance under heavy load and zero data loss.",
            "Implemented in-memory process session caching, significantly cutting latency for active users during peak hours.",
            "Set up persistent cache-to-database synchronization for network failover, eliminating critical data inconsistency issues.",
            "Developed a reusable shared component library and decoupled core modules, dramatically accelerating feature rollout.",
            "Integrated centralized logging of critical server events, streamlining root-cause diagnosis and system recovery.",
            "Automated regression tests for core workflows, preventing regression issues across production releases.",
            "Maintained production environments, troubleshooting high-priority issues and deploying zero-downtime performance patches."
          ]
        },
        stack: "Java, MySQL, Linux, Git, Command-based protocol (RCON)"
      }
    ]
  },

  // 7. СЕКЦИЯ КОНТАКТОВ И СОТРУДНИЧЕСТВА
  footer: {
    ru: {
      title: "Давайте обсудим сотрудничество",
      desc: "Всегда открыт к интересным предложениям, сложным бэкенд-задачам и техническим дискуссиям.",
      btnTelegram: "Написать в Telegram",
      btnCopy: "Скопировать почту",
      btnGithub: "GitHub",
      copyright: `© ${CURRENT_YEAR} Рустам Сулейманов. All rights reserved.`,
      subtext: "Designed for clarity & performance",
      toast: "Email скопирован в буфер!"
    },
    en: {
      title: "Let's discuss opportunities",
      desc: "Always open to exciting opportunities, challenging backend problems, and technical discussions.",
      btnTelegram: "Message on Telegram",
      btnCopy: "Copy email",
      btnGithub: "GitHub",
      copyright: `© ${CURRENT_YEAR} Rustam Suleymanov. All rights reserved.`,
      subtext: "Designed for clarity & performance",
      toast: "Email copied to clipboard!"
    }
  }
};