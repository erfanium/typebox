import { Value } from '@sinclair/typebox/value'
import { Type } from '@sinclair/typebox'
import { Assert } from '../../assert/index'

describe('value/convert/String', () => {
  const T = Type.String()
  it('Should convert from number 1', () => {
    const R = Value.Convert(T, 3.14)
    Assert.isEqual(R, '3.14')
  })
  it('Should convert from number 2', () => {
    const R = Value.Convert(T, 3)
    Assert.isEqual(R, '3')
  })
  it('Should convert from boolean 1', () => {
    const R = Value.Convert(T, true)
    Assert.isEqual(R, 'true')
  })
  it('Should convert from boolean 2', () => {
    const R = Value.Convert(T, false)
    Assert.isEqual(R, 'false')
  })
  it('Should convert from bigint', () => {
    const R = Value.Convert(T, BigInt(12345))
    Assert.isEqual(R, '12345')
  })
  it('Should convert from symbol', () => {
    const R = Value.Convert(T, Symbol(12345))
    Assert.isEqual(R, '12345')
  })
  // ----------------------------------------------------------
  // Casts
  // ----------------------------------------------------------
  it('Should convert string', () => {
    const value = 'hello'
    const result = Value.Convert(Type.String(), value)
    Assert.isEqual(result, 'hello')
  })
  it('Should convert number #1', () => {
    const value = 42
    const result = Value.Convert(Type.String(), value)
    Assert.isEqual(result, '42')
  })
  it('Should convert number #2', () => {
    const value = 42n
    const result = Value.Convert(Type.String(), value)
    Assert.isEqual(result, '42')
  })
  it('Should convert true', () => {
    const value = true
    const result = Value.Convert(Type.String(), value)
    Assert.isEqual(result, 'true')
  })
  it('Should convert false', () => {
    const value = false
    const result = Value.Convert(Type.String(), value)
    Assert.isEqual(result, 'false')
  })
  it('Should convert object', () => {
    const value = {}
    const result = Value.Convert(Type.String(), value)
    Assert.isEqual(result, {})
  })
  it('Should convert array', () => {
    const value = [] as any[]
    const result = Value.Convert(Type.String(), value)
    Assert.isEqual(result, [])
  })
})
