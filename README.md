# Настроен commitlint:

Коммиты должны соответсвовать формату conventional commits

# Настроен автоматический запуск проверок в CI для пулл реквестов:

При пуше и пулл реквесте происходят проверки, если они не прошли, то в ветку main нельзя сделать merge

# Настроен релизный процесс

При создании нового тега например
git tag v1
git push origin v1

Срабатывает release.yml и выполняет необходимые действия
