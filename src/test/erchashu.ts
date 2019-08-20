export class Node {
  private data = null
  private left = null
  private right = null

  constructor (data, left, right) {
    this.data = data
    this.left = left
    this.right = right
  }

  public show () {
    console.log(this.data)
  }
}

export default class ErChaShu {
  public root = null
  public insert (data) {
    const node = new Node(data, null, null)
    // 根节点
    if (!this.root) {
      this.root = node
      return
    }

    let current = this.root

    while (current) {
      if (current.data > data) {
        if (current.left === null) {
          current.left = node;
          break
        }
        current = current.left;
        console.log('current---1', current)
      } else {
        if (current.right === null) {
          current.right = node
          break
        }
        current = current.right;
        console.log('current---2', current)
      }
    }

    node.show()
  }

  find (data) {
    let current = this.root
    while (true) {
      if (data === current.data) {
        return current
      }

      current = data > current.data ? current.right : current.left
      if (current === null) {
        return null
      }
    }
  }
}