export class Utils {
  public static getWeekNumber(d: Date): number {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
    // Get first day of year
    let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
    // Calculate full weeks to nearest Thursday
    let weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7)
    // Return array of year and week number
    return weekNo
  }

  public static getEnvironmentSetting(name: string): string {
    if (process.env[name]) {
      return process.env[name]!
    }

    // try to get from custom connection strings
    return process.env[`CUSTOMCONNSTR_${name}`] as string
  }

  public static generateWeekBlobName(date?: Date): string {
    date = date || new Date()

    return `${date.getFullYear()}y_w${Utils.getWeekNumber(date)}_metadata`
  }

  public static generateMonthBlobName(date: Date): string {
    date = date || new Date()

    return `${date.getFullYear()}y_m${date.getMonth()}_metadata`
  }

  public static makeid(): string {
    let text = ''
    let possible = 'abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < 7; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return text
  }

}
