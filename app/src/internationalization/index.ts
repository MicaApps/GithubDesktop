const config = {
  'zh-CH': [
    {
      "Let's get started!": '让我们开始吧',
    },
    {
      'Add a repository to GitHub Desktop to start collaborating':
        '向GitHub Desktop添加一个存储库以开始协作',
    },
  ],
  'zh-ZW': [
    {
      "Let's get started!": '"讓我們開始吧"',
    },
    {
      'Add a repository to GitHub Desktop to start collaborating':
        '向GitHub Desktop添加一個存儲庫以開始合作',
    },
  ],
  'en-US': [
    {
      "Let's get started!": "Let's get started!",
    },
    {
      'Add a repository to GitHub Desktop to start collaborating':
        'Add a repository to GitHub Desktop to start collaborating',
    },
  ],
  'ru-RU': [
    {
      "Let's get started!": 'Давайте начнем!',
    },
    {
      'Add a repository to GitHub Desktop to start collaborating':
        'Добавьте репозиторий в GitHub Desktop, чтобы начать сотрудничать',
    },
  ],
}
config
export default function renderLabel(label: string) {
  //   const result = config[label]
  //   return result ? result : label
  //   console.log(curNation)
  return label
}
